/* export.modules = messageUserNotFound = 'Usuário não encontrado'
export const messageProcessError = 'Erro no processamento'
export const messageUserAndOrInvalid = 'Usuário e/ou senha inválidos'
export const messageCreateNewUser = 'Novo usuário criado com sucesso!'
export const messageUserDeleted = 'Usuário excluido com sucesso!' */

//mensagens API de clientes
module.exports = Object.freeze({
    //MENSAGENS CLIENTE
    CLIENTE_CADASTRADO: "Cliente cadastrado com successo!",
    CLIENTE_EXCLUIDO: "Cliente excluido com sucesso!",
    CLIENTE_JA_CADASTRADO: "já existe esse cliente cadastrado na base de dados!",
    //MENSAGENS INFRA
    INFRA_CADASTRADA: "Infra cadastrada com sucesso!",
    INFRA_JA_CADASTRADA: "já existe essa instência cadastrada na base de dados!",
    INFRA_CUSTO_ALTERADO: "Valor mensal alterado com sucesso!"
})
