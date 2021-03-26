import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { SvgLoader, SvgProxy } from "react-svgmt";
import './CatView.css';

interface CatViewProps {
    catProps: CatPropsType;
}

export const CatView: React.FC<CatViewProps> = ({ catProps }) => {
    const catFur = catProps.settings[0];
    const catEyes = catProps.settings[1];
    return (
        <article className="CatView">
            <SvgLoader className="CatView__model" path={`${process.env.PUBLIC_URL}/images/render/catsvg.svg`}>
                <SvgProxy selector="#eye-left-color" fill={catEyes.fill} />
                <SvgProxy selector="#eye-right-color" fill={catEyes.fill} />
                <SvgProxy selector="#head" fill={catFur.fill} />
                <SvgProxy selector="#ear-left-outside" fill={catFur.fill} />
                <SvgProxy selector="#ear-right-outside" fill={catFur.fill} />
                <SvgProxy selector="#body-front" fill={catFur.fill} />
                <SvgProxy selector="#body-back" fill={catFur.fill} />
                <SvgProxy selector="#tail" fill={catFur.fill} />
            </SvgLoader>
            {/*<h4>Atributo: {catProps[0].attribute} = Tipo: {catProps[0].type} y Color: {catProps[0].color}</h4>
            <h4>Atributo: {catProps[1].attribute} = Tipo: {catProps[1].type} y Color: {catProps[1].color}</h4>
            <h4>Atributo: {catProps[2].attribute} = Tipo: {catProps[2].type} y Color: {catProps[2].color}</h4>
    <h4>Atributo: {catProps[3].attribute} = Tipo: {catProps[3].type} y Color: {catProps[3].color}</h4>*/}
        </article>
    )
}