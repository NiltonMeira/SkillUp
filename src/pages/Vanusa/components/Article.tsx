import { Typography } from "@mui/material"
import { BlueBox, CutedPicture, NoramlPicture, TextBox, WhiteBox, YellowBox } from "./style"

export const Article = () => {
    return (
        <>
            <YellowBox>
                <TextBox>
                    <Typography variant="h3" component="h1">
                        Vanusa Vilarinho
                    </Typography>
                    <Typography component="p">
                        - Com mais de 30 anos de experiência profissional em desenvolvimento humano e organizacional, na área de gestão e líder de equipes, atuou em empresas renomadas com Volvo, Bosch, Sistema FIEP, Grupo Marista, Grupo Expoente, Grupo Positivo e Grupo UBEC.
                    </Typography>
                    <Typography component="p">
                        - Atuou como alta liderança de escolas do segmento de educação básica na gestão de grandes equipes (140 pessoas).
                    </Typography>
                    <Typography component="p">
                        - Professora de Pós-graduação, lecionando módulos de gestão de pessoas e consultoria interna de RH em diversas Instituições de Ensino Superior (IES_ - PUC, Faculdade União de Ponta Grossa, IBPEX, FESP e UniBrasil).
                    </Typography>
                    <Typography component="p">
                        - Facilitadora em programas de treinamento e desenvolvimento.

                    </Typography>
                    <Typography component="p">
                        - Como voluntária, atuou como diretora de desenvolvimento na ABRH-PR, na presidência e como chair person da juventude no Rotary Club Gralha Azul.

                    </Typography>
                </TextBox>
                <CutedPicture src="/VanusaCortada.png">
                </CutedPicture>
            </YellowBox>

            <WhiteBox>
                <NoramlPicture src="./Vanusa/01.jpg"></NoramlPicture>
                <TextBox>
                    <Typography variant="h4" component="h1">
                        Formação em:
                    </Typography>
                    <Typography component="p">
                        - Administração de Empresas – UFPR.
                    </Typography>
                    <Typography component="p">
                        - MBA em Gestão Estratégica de Pessoas – FGV.
                    </Typography>
                    <Typography component="p">
                        - MBA em Gestão Escolar - USP.
                    </Typography>
                    <Typography component="p">
                        - Pós-graduação em Educação, Protagonismo e Propósito de vida – Universidade Católica de Brasília.
                    </Typography>
                    <Typography component="p">
                        - Teoria U pela Presencing Institute com Otto Scharmer.
                    </Typography>
                    <Typography component="p">
                        - Seminário de Inovação pela Universite Compiegne - França.
                    </Typography>
                    <Typography component="p">
                        - Programa Formação Mulheres Líderes - Lapidus.
                    </Typography>
                    <Typography component="p">
                        -Programa Insighters - UEXP.
                    </Typography>
                </TextBox>
            </WhiteBox>

            <BlueBox>
                <TextBox>
                    <Typography variant="h4" component="h1">
                        Participou como membro em:

                    </Typography>
                    <Typography component="p">
                        - MEX - Mulheres Executivas do Paraná.

                    </Typography>
                    <Typography component="p">
                        - Grupo de T&D das montadoras.

                    </Typography>
                    <Typography component="p">
                        -Conselho de Inovação da FIEP.
                        - MBA em Gestão Escolar - USP.
                    </Typography>
                    <Typography component="p">
                        - Comissão de desenvolvimento de lideranças do Brasil Marista.
                    </Typography>

                </TextBox>
                <NoramlPicture src="./Vanusa/02.jpg"></NoramlPicture>
            </BlueBox>
        </>
    )
}