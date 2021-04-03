import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { SvgLoader, SvgProxy } from "react-svgmt";
import './CatView.css';
import { svgSelectors } from '../../utils/svgSelectors';

interface CatViewProps {
    catProps: CatPropsType;
    currentAttribute: string;
}

export const CatView: React.FC<CatViewProps> = ({ catProps, currentAttribute }) => {
    const catFurProps = catProps.settings[0];
    const catEyesProps = catProps.settings[1];
    const furOnlyStrokeSelector = svgSelectors.furOnlyStrokeSelector;
    const furFillAndStrokeSelector = svgSelectors.furFillAndStrokeSelector;
    const eyesFillSelector = svgSelectors.eyesFillSelector;
    const linesPatternSelector = svgSelectors.linesPatternSelector;

    const handleCamera = (currentAttribute: string) => {
        console.log(catFurProps.type === "lines")
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
    //#ear-left-linePattern, #ear-right-linePattern

    return (
        <article className="CatView">
            <SvgLoader className={`CatView__model ${camera}`} path={`${process.env.PUBLIC_URL}/images/render/catrender.svg`}>
                <SvgProxy selector={eyesFillSelector} fill={catEyesProps.fill} />
                <SvgProxy selector={furOnlyStrokeSelector} fill={catFurProps.stroke} />
                <SvgProxy selector={furFillAndStrokeSelector} fill={catFurProps.fill} stroke={catFurProps.stroke} />
                <SvgProxy selector={linesPatternSelector} fill={ catFurProps.type === "lines" ? catFurProps.stroke : catFurProps.fill} />
                <SvgProxy selector={"#ear-left-linePattern, #ear-right-linePattern"} stroke={ catFurProps.type === "lines" ? "rgba(0, 0, 0, 0.1)" : catFurProps.stroke} />
            </SvgLoader>
        </article>
    )
}