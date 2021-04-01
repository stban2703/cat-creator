import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { SvgLoader, SvgProxy } from "react-svgmt";
import './CatView.css';

interface CatViewProps {
    catProps: CatPropsType;
    currentAttribute: string;
}

export const CatView: React.FC<CatViewProps> = ({ catProps, currentAttribute }) => {
    const catFur = catProps.settings[0];
    const catEyes = catProps.settings[1];
    const handleCamera = (currentAttribute: string) => {
        switch (currentAttribute) {
            default:
                return "";
            case "eyes":
                return "CatView__model--eyes";
            case "necklace":
                return "CatView__model--necklace"
            case "hat":
                return "CatView__model--hat"
        }
    }
    const camera = handleCamera(currentAttribute)
    return (
        <article className="CatView">
            <SvgLoader className={`CatView__model ${camera}`} path={`${process.env.PUBLIC_URL}/images/render/catrender.svg`}>
                <SvgProxy selector="#eye-left-color" fill={catEyes.fill} />
                <SvgProxy selector="#eye-right-color" fill={catEyes.fill} />
                <SvgProxy selector="#eye-left-shadow" fill={catFur.stroke} />
                <SvgProxy selector="#eye-right-shadow" fill={catFur.stroke} />
                <SvgProxy selector="#mouth" fill={catFur.stroke} />
                <SvgProxy selector="#whisker-left-1" fill={catFur.stroke} />
                <SvgProxy selector="#whisker-left-2" fill={catFur.stroke} />
                <SvgProxy selector="#whisker-left-3" fill={catFur.stroke} />
                <SvgProxy selector="#whisker-right-1" fill={catFur.stroke} />
                <SvgProxy selector="#whisker-right-2" fill={catFur.stroke} />
                <SvgProxy selector="#whisker-right-3" fill={catFur.stroke} />
                <SvgProxy selector="#head" fill={catFur.fill} stroke={catFur.stroke} />
                <SvgProxy selector="#ear-left-outside" fill={catFur.fill} stroke={catFur.stroke} />
                <SvgProxy selector="#ear-right-outside" fill={catFur.fill} stroke={catFur.stroke} />
                <SvgProxy selector="#body-front" fill={catFur.fill} stroke={catFur.stroke} />
                <SvgProxy selector="#body-back" fill={catFur.fill} stroke={catFur.stroke}  />
                <SvgProxy selector="#paw-left" fill={catFur.fill} stroke={catFur.stroke} />
                <SvgProxy selector="#paw-right" fill={catFur.fill} stroke={catFur.stroke} />
                <SvgProxy selector="#tail" fill={catFur.fill} stroke={catFur.stroke} />
            </SvgLoader>
        </article>
    )
}