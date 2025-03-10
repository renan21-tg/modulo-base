class Cliente {
    #cpf

    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }

    getCpf() {
        return this.#cpf
    }

    getNomeUpperCase() {
        return this.nome.toUpperCase()
    }

    getNomeLowerCase() {
        return this.nome.toLowerCase()
    }

    getEnderecoUpperCase() {
        return this.endereco.toUpperCase()
    }

    getEnderecoLowerCase() {
        return this.endereco.toLowerCase()
    }
}

class Telefone {
    constructor (ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstadoUpperCase() {
        return this.estado.toUpperCase()
    }

    getEstadoLowerCase() {
        return this.estado.toLowerCase()
    }

    getCidadeUpperCase() {
        return this.cidade.toUpperCase()
    }

    getCidadeLowerCase() {
        return this.cidade.toLowerCase()
    }

    getRuaUpperCase() {
        return this.rua.toUpperCase()
    }

    getRuaLowerCase() {
        return this.rua.toLowerCase()
    }
}

class Empresa {
    #cnpj

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    getCnpj() {
        return this.#cnpj
    }

    getRazaoSocialUpperCase() {
        return this.razaoSocial.toUpperCase()
    }

    getRazaoSocialLowerCase() {
        return this.razaoSocial.toLowerCase()
    }

    getNomeFantasiaUpperCase() {
        return this.nomeFantasia.toUpperCase()
    }

    getNomeFantasiaLowerCase() {
        return this.nomeFantasia.toLowerCase()
    }

    getEnderecoUpperCase() {
        return this.endereco.toUpperCase()
    }

    getEnderecoLowerCase() {
        return this.endereco.toLowerCase()
    }

    detalhe() {
        console.log(`Razão Social: ${this.razaoSocial}`)
        console.log(`Nome fantasia: ${this.nomeFantasia}`)
        console.log('--------------------')

        if (this.telefones.size > 0) {
            console.log("Telefones da empresa:")
            this.telefones.forEach(telefone => {
                console.log(`ddd: ${telefone.numero.substring(0, 2)} numero: ${telefone.numero}`)
            })
            console.log('--------------------')
        }

        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Estado: ${cliente.endereco.estado} cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}`)
            
            cliente.telefones.forEach(telefone => {
                console.log(`ddd: ${telefone.numero.substring(0, 2)} numero: ${telefone.numero}`)
            })

            console.log('')
        })
    }
}

export { Empresa, Cliente, Endereco, Telefone }