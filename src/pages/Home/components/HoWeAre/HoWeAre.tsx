import { Typography } from "@mui/material";
import { TextBox, Title, CutedPicture, YelowBox } from "./style";

export const HoWeAre = () => {
    return (
        <YelowBox>
            <TextBox>
                <Title variant="h3">
                    Quem somos?
                </Title>
                <Typography variant="h6" component="h6">
                    A SkillUp é uma consultoria especializada em desenvolvimento de pessoas e organizações, fundada por duas amigas que compartilham uma amizade de quase 25 anos e uma rica trajetória profissional conjunta. Com uma vasta experiência acumulada ao longo de suas carreiras, onde já trabalharam juntas em três empresas diferentes, decidiram unir suas habilidades e conhecimentos para criar a SkillUp.
                </Typography>
            </TextBox>
            <CutedPicture src="/teste.png" alt="Imagem SkillUp" />
        </YelowBox>
    );
}
