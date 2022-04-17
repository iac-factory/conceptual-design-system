import {
    Grid, Column
} from "@carbon/react";

import { default as Loader } from "./../components/Loader";

const Component = ({ Page, timeout, description, ... Properties }) => {
    return (
        <Loader description={ description } timeout={ timeout }>
            <Grid { ... Properties }>
                <Column lg={ 16 } md={ 8 } sm={ 4 }>
                    <Page/>
                </Column>
            </Grid>
        </Loader>
    );
};

export default Component;

/// ---> Page Tree

import { default as Home } from "./Home";
import { default as Login } from "./Login";

import { default as GitHub } from "./GitHub";
import { default as GitLab } from "./GitLab";
import { default as Pipelines } from "./Pipelines";

import { default as Blog } from "./Blog";

import { default as Documentation } from "./Documentation";

import { default as Development } from "./Development";

import { default as Template } from "./Template";

const Module = {
    Home,
    Documentation,
    Development,
    Blog,
    GitHub,
    GitLab,
    Pipelines,
    Login,
    Template
};

export {Module};