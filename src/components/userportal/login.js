import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reach } from 'yup';
import formSchema from './validation/formSchema';
import Login from './login'
import Signup from './signup'
import { Route, Switch } from 'react-router-dom'