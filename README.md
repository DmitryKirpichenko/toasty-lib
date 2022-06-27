# React-Toast-Lib


This library makes it easy to create beautiful notifications for your application.

## Installation

```sh
npm install react-toast-lib-kirpichenko
yarn add react-toast-lib-kirpichenko
```


## Features

- Quick Setup
- Swipe closures
- Selecting a type or creating a custom

## Example

```sh
import React from 'react';
import {toast} from 'react-toast-lib-kirpichenko'

function App() {
    return (
        <div>
        {toast.showToast('Description', {
            type: 'error',
            position: 'top-rigth',
            autoDelete: true,
            delay: 3000,
            animation: '',
         })}
        </div>
    )
}
```

# Demo
[visit demo](https://dmitrykirpichenko.github.io/toasty-lib/)

# Author
[Dmitry Kirpichenko](https://github.com/DmitryKirpichenko)