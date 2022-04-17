import classNames from "classnames";
import React, { Component } from "react";
import { Button } from "@trendmicro/react-buttons";
import styles from "./index.module.scss";

interface Properties {
    name: string;
    url: (string | Location) & Location;
}

export default class extends Component implements Properties {
    children?: JSX.Element[];

    name: string;
    url: (string | Location) & Location;

    state = {
        collapseIn: false
    };

    constructor(properties: Properties, children?) {
        super(properties);

        this.url = properties.url;
        this.name = properties.name;
        this.children = children;
    }

    render() {
        return (
            <nav
                className={ classNames( styles.navbar, styles.navbarDefault ) }
                style={ { borderRadius: 0 } }
            >
                <div className={ styles.containerFluid }>
                    <div className={ styles.navbarHeader }>
                        <button
                            type="button"
                            className={ classNames( styles.navbarToggle, styles.collapsed ) }
                            onClick={ () => {
                                this.setState( { collapseIn: !this.state.collapseIn } );
                            } }
                        >
                            <span className={ styles.srOnly }>Toggle navigation</span>
                            <span className={ styles.iconBar }/>
                            <span className={ styles.iconBar }/>
                            <span className={ styles.iconBar }/>
                        </button>
                        <a href="#" className={ styles.navbarBrand }>{ this.name }</a>
                    </div>
                    <div
                        className={ classNames(
                            styles.collapse,
                            styles.navbarCollapse,
                            { [styles.in]: this.state.collapseIn }
                        ) }
                    >
                        { this.children }
                        <Button
                            className={ classNames( styles.navbarBtn, styles.navbarRight ) }
                            btnStyle="flat"
                            onClick={ () => {
                                window.location = this.url;
                            } }
                        >
                            <i className="fa fa-github"/>
                            GitHub
                        </Button>
                    </div>
                </div>
            </nav>
        );
    }
}
