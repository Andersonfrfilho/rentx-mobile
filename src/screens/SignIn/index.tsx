import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import {
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import { Container, Header, Title, SubTitle, Form, Footer } from './styles';
import { useAuth } from '../../hooks/auth';
import { ScreenNavigationProp } from '../../routes/app.stack.routes';

export function SignIn() {
  const theme = useTheme();
  const { signIn } = useAuth();
  const navigation = useNavigation<ScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('A senha é obrigatória'),
      });
      await schema.validate({ email, password });

      await signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message);
      }
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique as credenciais',
      );
    }
  }

  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos{'\n'}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{'\n'}uma experiencia incrível.
            </SubTitle>
          </Header>
          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled
              loading={false}
            />

            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              onPress={handleNewAccount}
              enabled
              loading={false}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
