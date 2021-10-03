'use strict'; //js mais formal

const limparFormulario = (endereco) =>{
            document.getElementById('endereco').value = '';
            document.getElementById('bairro').value = '';
            document.getElementById('cidade').value = '';
            document.getElementById('estado').value = '';
        }


const preencherFormulario = (endereco) =>{
            document.getElementById('endereco').value = endereco.logradouro;
            document.getElementById('bairro').value = endereco.bairro;
            document.getElementById('cidade').value = endereco.localidade;
            document.getElementById('estado').value = endereco.uf;
        }


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
            limparFormulario();

const cep = document.getElementById('cep').value;
const url = `https://viacep.com.br/ws/${cep}/json/`;//o link consultará a API do viacep , ${} = é uma variável. Acento grave para sites dinâmicos.
            if (cepValido(cep)){
const dados = await fetch(url);//ferramenta que recebe a url e ele retornará o valor da url. Retorna como uma promessa (pode acontecer ou não) não pode atribuir direto a uma variável, ai tem o método then.

const endereco = await dados.json();
                 if (endereco.hasOwnProperty('erro')){
                    document.getElementById('endereco').value = 'CEP não encontrado!';
                }else {
                    preencherFormulario(endereco);
                }
            }else{
                document.getElementById('endereco').value = 'CEP incorreto!';
            }

        }

        document.getElementById('cep')


