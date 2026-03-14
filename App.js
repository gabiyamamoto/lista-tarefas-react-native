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
        const listaFiltrada = listaTarefas.filter((item) => item.id !== idParaRemover);

        //atualizamos o estado com essa nova lista
        setListaTarefas(listaFiltrada);

    };


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Minhas Tarefas</Text>

            { }
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="O que vamos fazer hoje?"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
                    <Text style={styles.textoBotaoAdicionar}>+</Text>
                </TouchableOpacity>
            </View>
            { }
            <FlatList
                data={listaTarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemLista}>
                        <Text>{item.texto}</Text>
                        { }
                        <TouchableOpacity
                            style={styles.botaoRemover}
                            onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.textoBotaoRemover}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.textoVazio}>
                        Nenhuma tarefa por aqui. Você está livre! 🏖️
                    </Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d2d2d',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: '600',
        color: '#ffa600',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ffa600',
    },
    botaoAdicionar: {
        width: 50,
        height: 50,
        backgroundColor: '#ffa600',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    textoBotaoAdicionar: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },
    itemLista: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textoItem: {
        fontSize: 16,
        color: '#000000',
        flex: 1,
    },
    botaoRemover: {
        backgroundColor: '#ffa600',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotaoRemover: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    textoVazio: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        marginTop: 30,
    },
});
