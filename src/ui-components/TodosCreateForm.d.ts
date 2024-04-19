/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodosCreateFormInputValues = {
    title?: string;
    description?: string;
    userId?: string;
};
export declare type TodosCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodosCreateFormOverridesProps = {
    TodosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodosCreateFormProps = React.PropsWithChildren<{
    overrides?: TodosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TodosCreateFormInputValues) => TodosCreateFormInputValues;
    onSuccess?: (fields: TodosCreateFormInputValues) => void;
    onError?: (fields: TodosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodosCreateFormInputValues) => TodosCreateFormInputValues;
    onValidate?: TodosCreateFormValidationValues;
} & React.CSSProperties>;
export default function TodosCreateForm(props: TodosCreateFormProps): React.ReactElement;
