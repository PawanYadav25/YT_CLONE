import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    loggedIn: false,
  setUserlgin: () => {},
});


export default AuthContext