import { Typography } from "@mui/material";
import { BlueBox, PicHands, TextBox, Title, WhiteBox, } from "./style";

export const OurMission = () => {
    return (
        <div>
            <WhiteBox>
            <PicHands src="./nossoValores.jpeg" alt="" />
                <TextBox>
                    <Title variant="h3">
                        Nossa Missão
                    </Title>
                    <Typography variant="h6" component="h6">
                        Potencializar o capital humano das organizações, oferecendo soluções personalizadas e inovadoras que promovem o crescimento e a transformação. Valorizamos o relacionamento próximo com nossos clientes, compreendendo suas necessidades específicas para entregar resultados tangíveis e duradouros.
                    </Typography>
                </TextBox>
            </WhiteBox>
            <BlueBox>
                <TextBox>
                    <Title variant="h3">
                        Na SkillUP
                    </Title>
                    <Typography variant="h6" component="h6">
                        Acreditamos que o desenvolvimento contínuo de pessoas é a chave para o sucesso organizacional. Por isso, nossos serviços abrangem desde treinamentos técnicos e comportamentais até programas de liderança e gestão de mudanças, sempre com foco em criar ambientes de trabalho mais produtivos e harmoniosos.
                    </Typography>
                    <Typography variant="h6" component="h6">
                        Combinamos nossa paixão pelo desenvolvimento humano com uma abordagem prática e orientada a resultados, garantindo que cada projeto seja uma oportunidade para elevar o potencial das pessoas e das organizações com as quais trabalhamos.
                    </Typography>
                </TextBox>
                <PicHands src="./Indicadores.jpg" alt="" />
            </BlueBox>



        </div>
    );
}
