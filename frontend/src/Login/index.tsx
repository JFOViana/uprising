import { Container, Form, Titulo, Input, Button } from './login.ts';


export function Login(){
    return(
        <div>
            <Container>
                <Form>
                    <Titulo>Login</Titulo>
                    <Input placeholder='Usuário' />
                    <Input placeholder='Senhas'  type='passowrd'/>
                    <Button>Entrar</Button>
                </Form>
            </Container>
        </div>
    )
}