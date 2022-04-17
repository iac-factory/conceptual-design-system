import React, { useState, useRef, useEffect, forwardRef } from "react";
import cx from "classnames";

import {
    ComposedModal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    TextInput,
    PasswordInput,
    InlineLoading,
    Form,
    Button
} from "@carbon/react";

import {
    InformationFilled,
    Copy,
    ErrorFilled
} from "@carbon/icons-react";

import { APIKeyDownloader } from "./APIKeyDownloader";

import { default as settings } from "./../../settings/Configuration.js";

import { isRequiredIf } from "./../../utilities/Property-Utility.js";

import uuid from "./../../utilities/UUID-V4.js";

const componentName = "APIKeyModal";

export const APIKeyModal = forwardRef(
    (
        {
            apiKey,
            apiKeyLabel,
            apiKeyName,
            body,
            className,
            closeButtonText,
            copyButtonText,
            copyErrorText,
            copyIconDescription,
            customSteps,
            downloadBodyText,
            downloadFileName,
            downloadFileType,
            downloadLinkText,
            editButtonText,
            editSuccess,
            editSuccessTitle,
            editing,
            error,
            errorText,
            generateButtonText,
            generateSuccessBody,
            generateSuccessTitle,
            generateTitle,
            hasAPIKeyVisibilityToggle,
            hasDownloadLink,
            hideAPIKeyLabel,
            loading,
            loadingText,
            modalLabel,
            nameHelperText,
            nameLabel,
            namePlaceholder,
            nameRequired,
            nextStepButtonText,
            onClose,
            onCopy,
            onRequestEdit,
            onRequestGenerate,
            open,
            previousStepButtonText,
            showAPIKeyLabel,
            preventCloseOnClickOutside,
            ... rest
        },
        ref
    ) => {
        const [ copyError, setCopyError ] = useState(false);
        const [ name, setName ] = useState(apiKeyName);
        const [ currentStep, setCurrentStep ] = useState(0);
        const inputRef = useRef();
        const copyRef = useRef();
        const apiKeyInputId = useRef(uuid());
        const nameInputId = useRef(uuid());
        const hasSteps = Boolean(customSteps.length);
        const apiKeyLoaded = apiKey && !loading;
        const hasNextStep = hasSteps && currentStep < customSteps.length - 1;
        const hasPreviousStep = hasSteps && currentStep !== 0;
        const copyButtonProps = {
            renderIcon: Copy,
            iconDescription: copyIconDescription,
            ref: copyRef
        };
        const blockClass = `${ settings.prefix }--apikey-modal`;

        useEffect(() => {
            if ( inputRef.current && open ) {
                inputRef.current.focus();
            }
        }, [ open ]);

        useEffect(() => {
            if ( copyRef.current && open && apiKeyLoaded ) {
                copyRef.current.focus();
            }
        }, [ open, apiKeyLoaded ]);

        const isPrimaryButtonDisabled = () => {
            if ( loading ) {
                return true;
            }
            if ( hasSteps && "valid" in customSteps[currentStep] ) {
                return !customSteps[currentStep].valid;
            }
            if ( !hasSteps && nameRequired && !name ) {
                return true;
            }
            return false;
        };

        const getPrimaryButtonText = () => {
            if ( hasNextStep ) {
                return nextStepButtonText;
            }
            if ( apiKeyLoaded ) {
                return copyButtonText;
            }
            if ( editing ) {
                return editButtonText;
            }
            return generateButtonText;
        };

        const getSecondaryButtonText = () => {
            if ( hasPreviousStep && !apiKeyLoaded ) {
                return previousStepButtonText;
            }
            return closeButtonText;
        };

        const getTitle = () => {
            if ( editing && editSuccess ) {
                return editSuccessTitle;
            }
            if ( apiKeyLoaded ) {
                return generateSuccessTitle;
            }
            if ( hasSteps ) {
                return customSteps[currentStep].title;
            }
            return generateTitle;
        };

        const setNameHandler = (evt) => {
            setName(evt.target.value);
        };

        const onCloseHandler = () => {
            setName("");
            setCurrentStep(0);
            onClose();
        };

        const submitHandler = async () => {
            if ( hasNextStep ) {
                setCurrentStep(currentStep + 1);
            } else if ( apiKeyLoaded ) {
                if ( onCopy ) {
                    onCopy(apiKey);
                } else {
                    try {
                        await navigator.clipboard.writeText(apiKey);
                    } catch ( e ) {
                        console.error(e);
                        setCopyError(true);
                    }
                }
            } else if ( editing ) {
                onRequestEdit(name);
            } else {
                onRequestGenerate(name);
            }
        };

        const onBackHandler = () => {
            if ( hasPreviousStep && !apiKeyLoaded ) {
                setCurrentStep(currentStep - 1);
            } else {
                onCloseHandler();
            }
        };

        return (
            <ComposedModal
                { ... rest }
                { ... { open, ref } }

                className={ cx(className, blockClass) }
                onClose={ onCloseHandler }
                size="sm"
                aria-label={ modalLabel }
                preventCloseOnClickOutside={ preventCloseOnClickOutside }
            >
                <ModalHeader
                    className={ `${ blockClass }__header` }
                    title={ getTitle() }
                    label={ modalLabel }
                />
                <ModalBody className={ `${ blockClass }__body-container` }>
                    { (hasSteps && !apiKeyLoaded) ? (
                        customSteps[currentStep].content
                    ) : (
                        <>
                            { (body) && <p className={ `${ blockClass }__body` }>{ body }</p> }
                            { !editing && apiKey && hasAPIKeyVisibilityToggle && (
                                <PasswordInput
                                    value={ apiKey }
                                    labelText={ apiKeyLabel }
                                    id={ apiKeyInputId.current }
                                    showPasswordLabel={ showAPIKeyLabel }
                                    hidePasswordLabel={ hideAPIKeyLabel }
                                    tooltipPosition="left"
                                />
                            ) }
                            { (!editing && (apiKey && !hasAPIKeyVisibilityToggle)) && (
                                <TextInput
                                    value={ apiKey }
                                    labelText={ apiKeyLabel }
                                    id={ apiKeyInputId.current }
                                />
                            ) }
                            { (editing || (!apiKeyLoaded && nameRequired)) && (
                                <Form onSubmit={ submitHandler }>
                                    <TextInput
                                        helperText={ nameHelperText }
                                        placeholder={ namePlaceholder }
                                        labelText={ nameLabel }
                                        onChange={ setNameHandler }
                                        value={ name }
                                        id={ nameInputId.current }
                                        disabled={ loading }
                                        ref={ inputRef }
                                        required={ nameRequired }
                                    />
                                </Form>
                            ) }
                            { (loading) && (
                                <InlineLoading
                                    description={ loadingText }
                                    className={ `${ blockClass }__loader` }
                                />
                            ) }
                            { (copyError || error) && (
                                <div className={ `${ blockClass }__messaging` }>
                                    <div className={ `${ blockClass }__error-icon` }>
                                        <ErrorFilled/>
                                    </div>
                                    <p className={ `${ blockClass }__messaging-text` }>
                                        { copyError ? copyErrorText : errorText }
                                    </p>
                                </div>
                            ) }
                            { (apiKeyLoaded) && (
                                <div className={ `${ blockClass }__messaging` }>
                                    <InformationFilled/>
                                    { hasDownloadLink ? (
                                        <APIKeyDownloader
                                            apiKey={ apiKey }
                                            body={ downloadBodyText }
                                            fileName={ downloadFileName }
                                            linkText={ downloadLinkText }
                                            fileType={ downloadFileType }
                                        />
                                    ) : (
                                        <div className={ `${ blockClass }__messaging-text` }>
                                            { generateSuccessBody }
                                        </div>
                                    ) }
                                </div>
                            ) }
                        </>
                    ) }
                </ModalBody>
                <ModalFooter className={ `${ blockClass }__footer` }>
                    <Button type="button" kind="secondary" onClick={ onBackHandler }>
                        { getSecondaryButtonText() }
                    </Button>
                    <Button
                        { ... ((apiKeyLoaded) ? copyButtonProps : {}) }
                        type="submit"
                        kind="primary"
                        onClick={ submitHandler }
                        disabled={ isPrimaryButtonDisabled() }
                    >
                        { getPrimaryButtonText() }
                    </Button>
                </ModalFooter>
            </ComposedModal>
        );
    }
);

const customStepsRequiredProps = (type) =>
    isRequiredIf(
        type,
        ({ customSteps }) => customSteps && customSteps.length > 1
    );

const editRequiredProps = (type) =>
    isRequiredIf(type, ({ editing }) => editing);

const downloadRequiredProps = (type) => isRequiredIf(type, ({ hasDownloadLink }) => hasDownloadLink);

APIKeyModal.displayName = componentName;