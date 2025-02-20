import React, { useState, useEffect } from 'react';
import { FormContainer, StyledForm, InputGroup, Label, Input, Button } from './ParamEditor.styles';


type Color = string;

export interface Param {
    id: number;
    name: string;
    type: 'string';
}

export interface ParamValue {
    paramId: number;
    value: string;
}

export interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

export interface Props {
    params: Param[];
    model: Model;
}



const ParamEditor: React.FC<Props> = ({ params, model }) => {
    const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);

    useEffect(() => {
        setParamValues(model.paramValues);
    }, [model]);

    const handleParamChange = (paramId: number, value: string) => {
        setParamValues(prevValues =>
            prevValues.map(param =>
                param.paramId === paramId ? { ...param, value } : param
            )
        );
    };

    const getModel = (): Model => {
        return {
            ...model,
            paramValues: paramValues
        };
    };

    return (
        <div>
            <FormContainer>
                <StyledForm>
                    {params.map(param => (
                        <InputGroup key={param.id}>
                            <Label htmlFor={`param-${param.id}`}>{param.name}</Label>
                            <Input
                                id={`param-${param.id}`}
                                type="text"
                                value={paramValues.find(p => p.paramId === param.id)?.value || ''}
                                onChange={(e) => handleParamChange(param.id, e.target.value)}
                            />
                        </InputGroup>
                    ))}
                    <Button onClick={(e) => {
                        e.preventDefault();
                        console.log(getModel());
                    }}>Get Model</Button>
                </StyledForm>
            </FormContainer>
        </div>
    );
};

export default ParamEditor;