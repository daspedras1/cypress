describe('Realizando pesquisa', () => {
    it('Acessando link inicial', () => {
        // Acessando a página principal
        cy.visit('https://bit.ly/3jOMrR9');
        cy.wait(2000)

        //Validando os campos apresentados na tela:
        cy.get("#masthead > div.header-t > div > div.site-branding > div > h1 > a")
            .should("have.text", "VV Test");

        cy.get("#menu-item-147 > a")
            .should("have.text", "Home");

        cy.get("#menu-item-139 > a")
            .should("have.text", "Blog");

        cy.get("#menu-item-140 > a")
            .should("have.text", "Sobre");

        cy.get("#menu-item-141 > a")
            .should("have.text", "Contato");

        cy.get("#menu-item-84 > a")
            .should("have.text", "Cadastro");

        cy.get("#menu-item-226 > a")
            .should("have.text", "Pesquisa – QA");
    });

    it('Clicando em Pesquisa - QA', () => {
        // Clicando em Pesquisa - QA
        cy.get("#menu-item-226 > a").click();
        cy.wait(2000);

        cy.get("#crumbs > span:nth-child(1) > a > span")
            .should("have.text", "Página inicial");

        cy.get("#crumbs > span.current > a")
            .should("have.text", "Pesquisa – QA");

        cy.get("#post-2 > header > h1")
            .should("have.text", "Pesquisa – QA");

        cy.get("#post-2 > div > p")
            .should("have.text", "Pesquisa para o profissional da área de Qualidade:");

        cy.get("#nf-form-title-2 > h3")
            .should("have.text", "Questionário");

        cy.get("#nf-label-field-5")
            .should("have.text", "Nome * ");

        cy.get("#nf-label-field-6")
            .should("have.text", "Sobrenome * ");

        cy.get("#nf-label-field-7")
            .should("have.text", "Email * ");

        cy.get("#nf-label-field-8")
            .should("have.text", "Confirmação de email * ");

        cy.get("#nf-label-field-17")
            .should("have.text", "Telefone  ");

        cy.get("#nf-label-field-10")
            .should("have.text", "Idade * ");

        cy.get("#nf-label-field-11")
            .should("have.text", "Quanto tempo você está na área de QA? * ");

        cy.get("#nf-label-field-12")
            .should("have.text", "O que te atraiu na área? * ");

        cy.get("#nf-label-field-13")
            .should("have.text", "O que mais você precisa melhorar? * ");

        cy.get("#nf-label-field-14")
            .should("have.text", "Qual linguagem de programação te interessa  * ");

        cy.get("#nf-label-field-15")
            .should("have.text", "Escreva resumidamente um plano para sua carreira  ");
    });

    it('Preenchendo e enviando os campos da pesquisa', () => {
        // Preenchendo os campos obrigatórios da pesquisa
        cy.get("#nf-field-5")
            .type("Edson")
            .should("have.value", "Edson");

        cy.get("#nf-field-6")
            .type("Luna")
            .should("have.value", "Luna");

        cy.get("#nf-field-7")
            .type("teste@teste.com.br")
            .should("have.value", "teste@teste.com.br");

        cy.get("#nf-field-8")
            .type("teste@teste.com.br")
            .should("have.value", "teste@teste.com.br");

        cy.get("#nf-field-10-1")
            .check({ force: true })
            .should("be.checked");
            
        cy.get("#nf-field-11")
            .select("mais de 5 anos")
            .should("have.value", "mais-de-5-anos");

        cy.get("#nf-field-12")
            .select("Sou mega chato")
            .should("have.value", "sou-mega-chato");

        cy.get("#nf-field-13-4")
            .check({ force: true })
            .should('be.checked');

        cy.get("#nf-field-14")
            .type("JavaScript, Python, Java")
            .should("have.value", "JavaScript, Python, Java");

        cy.get("#nf-field-16")
            .click();
    });

    it('Enviando pesquisa e validando resposta', () => {
        // Clicando para enviar os dados preenchidos na pesquisa
        // cy.get("#nf-field-16")
        //     .click();
        cy.wait(5000);

        cy.get("#crumbs > span:nth-child(1) > a > span")
            .should("have.text", "Página inicial");

        cy.get("#crumbs > span.current > a")
            .should("have.text", "Pesquisa – QA");

        cy.get("#post-2 > header > h1")
            .should("have.text", "Pesquisa – QA");

        cy.get("#post-2 > div > p")
            .should("have.text", "Pesquisa para o profissional da área de Qualidade:");

        cy.get("#nf-form-2-cont > div > div.nf-response-msg")
            .should("have.text", "Your form has been successfully submitted.\n")

    })
})