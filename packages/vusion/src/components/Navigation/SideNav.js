import React, { useState, useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { CARBON_SIDENAV_ITEMS } from "./_utils";
import { usePrefix } from "../../utilities/hooks/usePrefix.js";
// TO-DO: comment back in when footer is added for rails
// import SideNavFooter from './SideNavFooter';

const AriaLabelPropType = {
    "aria-label": PropTypes.string,
    "aria-labelledby": PropTypes.string
};

const SideNav = React.forwardRef(function SideNav(props, ref) {
    const {
        expanded: expandedProp,
        defaultExpanded,
        isChildOfHeader,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        children,
        onToggle,
        className: customClassName,
        // TO-DO: comment back in when footer is added for rails
        // translateById: t,
        isFixedNav,
        isRail,
        isPersistent,
        addFocusListeners,
        addMouseListeners,
        onOverlayClick,
        ... other
    } = props;

    const prefix = usePrefix();
    const { current: controlled } = useRef(expandedProp !== undefined);
    const [ expandedState, setExpandedState ] = useState(defaultExpanded);
    const [ expandedViaHoverState, setExpandedViaHoverState ] = useState(
        defaultExpanded
    );
    const expanded = controlled ? expandedProp : expandedState;
    const handleToggle = (event, value = !expanded) => {
        if ( !controlled ) {
            setExpandedState(value);
        }
        if ( onToggle ) {
            onToggle(event, value);
        }
        if ( controlled || isRail ) {
            setExpandedViaHoverState(value);
        }
    };

    const accessibilityLabel = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy
    };

    // TO-DO: comment back in when footer is added for rails
    // const assistiveText = expanded
    //   ? t('carbon.sidenav.state.open')
    //   : t('carbon.sidenav.state.closed');

    const className = cx({
        [`${ prefix }--side-nav`]: true,
        [`${ prefix }--side-nav--expanded`]: expanded || expandedViaHoverState,
        [`${ prefix }--side-nav--collapsed`]: !expanded && isFixedNav,
        [`${ prefix }--side-nav--rail`]: isRail,
        [customClassName]: !!customClassName,
        [`${ prefix }--side-nav--ux`]: isChildOfHeader,
        [`${ prefix }--side-nav--hidden`]: !isPersistent
    });

    const overlayClassName = cx({
        [`${ prefix }--side-nav__overlay`]: true,
        [`${ prefix }--side-nav__overlay-active`]: expanded || expandedViaHoverState
    });

    let childrenToRender = children;

    // if a rail, pass the expansion state as a prop, so children can update themselves to match
    if ( isRail ) {
        childrenToRender = React.Children.map(children, (child) => {
            // if we are controlled, check for if we have hovered over or the expanded state, else just use the expanded state (uncontrolled)
            let currentExpansionState = controlled
                ? expandedViaHoverState || expanded
                : expanded;
            // avoid spreading `isSideNavExpanded` to non-Carbon UI Shell children
            return React.cloneElement(child, {
                ... (CARBON_SIDENAV_ITEMS.includes(
                    child.type?.displayName ?? child.type?.name
                )
                    ? {
                        isSideNavExpanded: currentExpansionState
                    }
                    : {})
            });
        });
    }

    let eventHandlers = {};

    if ( addFocusListeners ) {
        eventHandlers.onFocus = (event) => {
            if ( !event.currentTarget.contains(event.relatedTarget) ) {
                handleToggle(event, true);
            }
        };
        eventHandlers.onBlur = (event) => {
            if ( !event.currentTarget.contains(event.relatedTarget) ) {
                handleToggle(event, false);
            }
        };
    }

    if ( addMouseListeners && isRail ) {
        eventHandlers.onMouseEnter = () => handleToggle(true, true);
        eventHandlers.onMouseLeave = () => handleToggle(false, false);
    }

    return (
        <>
            { isFixedNav ? null : (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div className={ overlayClassName } onClick={ onOverlayClick }/>
            ) }
            <nav
                ref={ ref }
                className={ [
                    `${ prefix }--side-nav__navigation ${ className }`,
                    (expanded && isRail) && `${ prefix }--side-nav--rail-expanded` || `${ prefix }--side-nav--rail-compressed`
                ].join(" ") }
                { ... accessibilityLabel }
                { ... eventHandlers }
                { ... other }>
                { childrenToRender }
            </nav>
        </>
    );
});

SideNav.displayName = "SideNav";
SideNav.defaultProps = {
    // TO-DO: comment back in when footer is added for rails
    // translateById: (id) => {
    //   const translations = {
    //     'carbon.sidenav.state.open': 'Close',
    //     'carbon.sidenav.state.closed': 'Open',
    //   };
    //   return translations[id];
    // },
    defaultExpanded: false,
    isChildOfHeader: true,
    isFixedNav: false,
    isPersistent: true,
    addFocusListeners: true,
    addMouseListeners: true
};

export default SideNav;