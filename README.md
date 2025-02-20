# ParamEditor

ParamEditor — это React-компонент, который позволяет редактировать параметры модели.

## Установка

### `npm install`


## Функциональность
- Позволяет редактировать значения параметров.
- Кнопка **Get Model** выводит текущую модель в консоль.
- Автоматически обновляет значения параметров при изменении модели.


## Использование

```tsx
import React from 'react';
import ParamEditor, { Param, Model } from './ParamEditor';

const params: Param[] = [
    { id: 1, name: 'Parameter 1', type: 'string' },
    { id: 2, name: 'Parameter 2', type: 'string' },
];

const model: Model = {
    paramValues: [
        { paramId: 1, value: 'Value 1' },
        { paramId: 2, value: 'Value 2' },
    ],
    colors: ['#ff0000', '#00ff00'],
};

const App = () => {
    return <ParamEditor params={params} model={model} />;
};

export default App;
```



## Типы

### `Param`
```ts
interface Param {
    id: number;
    name: string;
    type: 'string';
}
```

### `ParamValue`
```ts
interface ParamValue {
    paramId: number;
    value: string;
}
```

### `Model`
```ts
interface Model {
    paramValues: ParamValue[];
    colors: string[];
}
```

## Разработка

```sh
npm start
```

или

```sh
yarn start
```



