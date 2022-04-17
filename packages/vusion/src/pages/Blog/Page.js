import React, { useState, useEffect } from "react";

import "./SCSS/Card.scss";

import { default as List } from "./List";

import Content from "./Test.mdx";

export const Page = ({}) => {
    return (
        <>
            <List rows={ 3 }/>
            <Content/>
        </>
    );
};

export default Page;