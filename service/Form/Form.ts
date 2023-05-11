import { FormInstance } from "element-plus";
import { ImplForm } from "./ImplForm";

export class Form implements ImplForm {
    formEl: FormInstance | undefined;
    constructor(formEl: FormInstance | undefined) {
        this.formEl = formEl;
    }

    public async validate() {
        if (!this.formEl) return false;
        return await this.formEl.validate((valid, fields) => {
            if (valid) {
                console.log("fields", fields);
            } else {
                console.log("error submit!", fields);
            }
        });
    }

    public validateField() {
        if (!this.formEl) return false;
        this.formEl.validateField()
    }

    public resetFields() {
        if (!this.formEl) return false;
        this.formEl.resetFields()
    }

    public scrollToField() {
        if (!this.formEl) return false;
    }

    public clearValidate() {
        if (!this.formEl) return false;
        this.formEl.clearValidate()
    }
}
