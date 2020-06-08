import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import BotaoCabecalho from '../components/BotaoCabecalho'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ContatoInput from '../components/ContatoInput';
import { useDispatch, useSelector } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';

const NovoContato = (props) => {
    const dispatch = useDispatch();
    const contatos = useSelector(estado => estado.contatos.contatos);

    const adicionarContato = (nome, celular, foto, lat, lng) => {
        var lastId = 8;
        contatos.forEach((item) => {
            if (item.id > lastId) {
                lastId = item.id;
            }
        })

        dispatch(contatosActions.addContato(parseInt(lastId) + 2, nome, celular, foto, lat, lng, (new Date).toLocaleString()));
        props.navigation.goBack();
    }

    return (
        <ScrollView>
            <View>
                <ContatoInput onAdicionarContato={adicionarContato} isEditando={false} />
            </View>
        </ScrollView>
    )
};

const estilos = StyleSheet.create({
});

NovoContato.navigationOptions = dadosNav => {
    return {
        headerTitle: "Cadastrar contato"
    }
}

export default NovoContato;
