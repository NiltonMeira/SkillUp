import { Typography } from "@mui/material"
import { BlueBox, CutedPicture, NoramlPicture, TextBox, WhiteBox, YellowBox } from "./style"

export const Article = () => {
    return (
        <>
            <YellowBox>
                <TextBox>
                    <Typography variant="h3" component="h1">
                        Marília Guimarães
                    </Typography>
                    <Typography component="p">
                        - Carreira desenvolvida na área de Recursos humanos onde atuou nos subsistemas de treinamento e desenvolvimento, recrutamento e seleção, e comunicação interna
                    </Typography>
                    <Typography component="p">
                        - Atuou em organizações como Robert Bosch, TMT Motoco, Grupo Marista e Federação das Industrias.
                    </Typography>
                    <Typography component="p">
                        - Professora no Centro Tecnologico Positivo nos cursos de Gestão de Marketing e Gestão de Recursos Humanos
                    </Typography>
                    <Typography component="p">
                        - Professora convidada da PUC-PR para atuar em Programas de Educação Executiva e Pós Graduação
                    </Typography>
                    <Typography component="p">
                        - Facilitadora em programas de treinamento e desenvolvimento e mentora de carreira
                    </Typography>
                    <Typography component="p">
                        - Membro do conselho de Deliberativo da ABRH-PR

                    </Typography>
                    <Typography component="p">
                        - Membro do GEDEP  Grupo de desenvolvimento de pessoas
                    </Typography>
                    <Typography component="p">
                        - Proprietária da empresa Marília Guimarães – Desenvolvimento de Pessoas e Organizações
                    </Typography>
                </TextBox>
                <CutedPicture src="/MariliaCortada.png">
                </CutedPicture>
            </YellowBox>

            
            <WhiteBox>
                <NoramlPicture src="./Marilia/01.jpg"></NoramlPicture>
                <TextBox>
                    <Typography variant="h4" component="h1">
                        Formação em:
                    </Typography>
                    <Typography component="p">
                        - Secretariado Executivo PUC-PR

                    </Typography>
                    <Typography component="p">
                        - Consultoria Interna ADIGO/SP 

                    </Typography>
                    <Typography component="p">
                        - Coaching Executivo ICI – International Coaching


                    </Typography>
                    <Typography component="p">
                        - Cultura da Inovação e sua Implementação Empresarial – Institut Européen de Stratégies et d’ Innovation ( França)

                    </Typography>
                    <Typography component="p">
                        - Mentoria estratégica – Creative Institute

                    </Typography>
                    <Typography component="p">
                        - Psicologia Positiva – nanodegree – WIEGROW Soluções para a vida

                    </Typography>
                    <Typography component="p">
                        - Conselheiro Trendsinnovation – Inova Bussies Shcool

                    </Typography>
                    <Typography component="p">
                        - Consultoria de Imagem – Centro Europeu
                    </Typography>
                </TextBox>
            </WhiteBox>
            
            <BlueBox>
                <TextBox>
                    <Typography variant="h4" component="h1">
                        Capacitação em:

                    </Typography>
                    <Typography component="p">
                        - Ferramenta DiSC ETalent


                    </Typography>
                    <Typography component="p">
                        - Investigação Apreciativa – Casa Western Reserve University

                    </Typography>
                    

                </TextBox>
                <NoramlPicture src="./Marilia/02.jpg"></NoramlPicture>
            </BlueBox>
        </>
    )
}