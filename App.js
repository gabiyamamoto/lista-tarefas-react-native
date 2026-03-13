import { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    // Guarda oq o usuário está digitando no input agr
    const [novaTarefa, setNovaTarefa] = useState('');

    //Guarda a nossa lista completa de tarefas (comeca vazia)
    const [listaTarefas, setListaTarefas] = useState([]);

    // funcao para adicionar (usando o spread operator)
    const adicionarTarefa = () => {
        if (novaTarefa.trim() === '') return;

        //cria um obj para a nova tarefa com um ID único
        const tarefaObjeto = {
            id: String(Date.now()),
            texto: novaTarefa,
        };

        //pegamos tudo q já tinha na lista (...listaTarefas) e jogamos o novo item no final
        setListaTarefas([...listaTarefas, tarefaObjeto]);

        //limpa o input para o usuário para digitar a próxima
        setNovaTarefa('');
    };

    // Função para REMOVER (usando o Filter)
    const removerTarefa = (idParaRemover) => {
        //O filter atua como um "segurança de balada"
        // ele cria uma nova lista deixando passar APENAS qm tem o ID diferente do que queremos apagar
        const listaFiltrada = listaTarefas.filter((item) => itemId !== idParaRemover);

        //atualizamos o estado com essa nova lista
        setListaTarefas(listaFiltrada);

        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Minhas Tarefas</Text>

                {}
                <View style={styles.inputContainer}>
                    <TextInput
                        styles={styles.input}
                        placeholder="O que vamos fazer hoje?"
                        value={novaTarefa}
                        onChangeText={setNovaTarefa}
                    />
                    <TouchableOpacity style={styles.botaoAdicionar} onpPress={adicionarTarefa}>
                        <Text style={styles.textoBotaoAdicionar}></Text>+
                    </TouchableOpacity>
                </View>
                {}
                <FlatList
                    data={listaTarefas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.itemLista}>
                            <Text>{item.texto}</Text>
                            {}
                            <TouchableOpacity
                                style={styles.botaoRemover}
                                onpPress={() => removerTarefa(item.id)}>
                                <Text style={styles.textoBotaoRemover}>X</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    ListEmptyComponent={() => (
                        <Text style={style.textoVazio}>
                            Nenhuma tarefa por aqui. Você está livre! 🏖️
                        </Text>
                    )}
                />
            </View>
        );
    };
}

const syles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'hold',
        color: '#444444',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        heght: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#fff',
    },
    botaoAdicionar: {
        width: 50,
        heght: 50,
        backgroundColor: '#ffff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    textoBotaoAdicionar: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemLista: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 2,
        shadowColor: '#fff',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    textoItem: {
        fontSize: 16,
        color: '#fff',
        flex: 1,
    },
    BotaoRemover: {
        backgroundColor: '#ffff',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotaoRemover: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textoVazio: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        marginTop: 30,
    },
});
