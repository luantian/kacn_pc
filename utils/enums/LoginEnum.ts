// 页面三种模式
export enum Mode {
    login,
    register,
    bind,
}

// 生成底部操作按钮名称 依赖数据
export enum OperaButtons {
    newUserRegister,
    verifyCodeLogin,
    forgetPassword,
    accountPasswordLogin,
    alreadyHaveAccount,
    accountPasswordBind,
    verifyCodeBind
}

// 生成表单名称
export enum Way {
    account = 'account',
    password = 'password',
    verifyCode = 'verifyCode',
    phone = 'phone'
}

export enum LoginOrBindWay {
    zero,
    one
}
