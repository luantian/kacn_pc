import { FormInstance } from "element-plus";

export interface ImplForm {
    formEl: FormInstance | undefined;
    validate(): void;
    validateField(): void;
    resetFields(): void;
    scrollToField(): void;
    clearValidate(): void;
}
