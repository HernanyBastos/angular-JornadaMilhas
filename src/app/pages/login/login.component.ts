import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  //Criando um FormGroup: responsável por agrupar e gerenciar os campos do formulário de login
  loginForm!: FormGroup

  //Injeção de dependência: disponibilizando o FormBuilder, o serviço de autenticação e o roteador para navegação
  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    public router: Router
  ) { }
  
  //Ciclo de vida do Angular: ao inicializar o componente, cria o formulário com os campos "email" e "senha"
  //Criando os Validaores do email e senha para mostrar na tela do usuário
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    })
  }

  //Função chamada ao tentar acessar a conta
  acessarConta(){
    //Obtendo os valores do formulário (email e senha)
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    //Chamando o serviço de autenticação e se inscrevendo no Observable para tratar a resposta da API
    this.authService.autenticar(email, senha).subscribe({
      
      //next: executado em caso de sucesso, exibe a resposta no console e redireciona para a rota "home"
      next: (value) => {
        console.log("Login realizado com sucesso!", value);
        this.router.navigate(['home']);
      },

      //error: executado em caso de falha, exibe o erro no console
      error: (erro) => {
        console.error('Erro ao realizar login', erro);
      }
    })
  }
}


