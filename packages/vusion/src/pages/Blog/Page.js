import React, { useState, useEffect } from "react";

import "./SCSS/Card.scss";

import { default as List } from "./List";

export const Page = ({}) => {
    return (
        <>
            <List rows={ 3 }/>
        </>
    );
};

export default Page;