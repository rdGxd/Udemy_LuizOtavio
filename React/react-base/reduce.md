# Funcionamento do Redux

-> Estado inicial: {
usuario_logado: false
}

O Reducer vai ouvir todas as ações disparadas cabe ao desenvolvedor escutar a ação especifica que ele qr ouvir e executar a manipulação de estado

## Manipular o estado

-> disparar uma ação -> a ação vai ser ouvida por um reducer -> e ele vai ser responsável por alterar o estado

-> ação -> reducer -> newState = state -> retorna o newState -> newState passa a ser o novo estado global

## Quando usar

Você só vai user Redux quando você achar que a aplicação precisa de um estado global
Ex: Carrinho de compras de um e-commerce
