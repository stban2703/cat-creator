import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { SvgLoader, SvgProxy } from "react-svgmt";
import './CatView.css';

interface CatViewProps {
    catProps: CatPropsType;
    currentAttribute: string;
}

export const CatView: React.FC<CatViewProps> = ({ catProps, currentAttribute }) => {
    const catFurProps = catProps.settings[0];
    const catEyesProps = catProps.settings[1];
    const furOnlyStrokeSelector = "#eye-left-shadow, #eye-right-shadow, #mouth, #whisker-left-1, #whisker-left-2, #whisker-left-3, #whisker-right-1, #whisker-right-2, #whisker-right-3";
    const furFillAndStrokeSelector = "#head, #ear-left-outside, #ear-right-outside, #body-front, #body-back, #paw-left, #paw-right, #tail";
    const eyesFillSelector = "#eye-left-color, #eye-right-color";

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
    const camera = handleCamera(currentAttribute);

    return (
        <article className="CatView">
            <SvgLoader className={`CatView__model ${camera}`} path={`${process.env.PUBLIC_URL}/images/render/catrender.svg`}>
                <SvgProxy selector={eyesFillSelector} fill={catEyesProps.fill} />
                <SvgProxy selector={furOnlyStrokeSelector} fill={catFurProps.stroke} />
                <SvgProxy selector={furFillAndStrokeSelector} fill={catFurProps.fill} stroke={catFurProps.stroke} />
            </SvgLoader>
        </article>
    )
}