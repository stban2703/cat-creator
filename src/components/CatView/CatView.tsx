import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { SvgLoader, SvgProxy } from "react-svgmt";
import './CatView.css';
import { svgSelectors } from '../../utils/svgSelectors';
import { handleCamera } from '../../utils/handleCamera';

interface CatViewProps {
    catProps: CatPropsType;
    currentAttribute: string;
}

export const CatView: React.FC<CatViewProps> = ({ catProps, currentAttribute }) => {
    const catFurProps = catProps.settings[0];
    const catEyesProps = catProps.settings[1];
    const shadowSelector = svgSelectors.shadow;
    const furOnlyStrokeSelector = svgSelectors.furOnlyStroke;
    const furFillAndStrokeSelector = svgSelectors.furFillAndStroke;
    const eyesFillSelector = svgSelectors.eyesFill;
    const linesPatternSelector = svgSelectors.linesPattern;
    const colorAndWhitePatternSelector = svgSelectors.colorAndWhitePattern;
    const siamesePatternSelector = svgSelectors.siamesePattern;
    const tricolorYellowSelector = svgSelectors.tricolorPatternYellow;
    const tricolorBlackSelector = svgSelectors.tricolorPatternBlack;
    const pupilContractedSelector = svgSelectors.pupilContracted;
    const pupilNormalSelector = svgSelectors.pupilNormal;
    const pupilExpandedSelector = svgSelectors.pupilExpanded;
    const camera = handleCamera(currentAttribute);

    return (
        <article className="CatView">
            <SvgLoader className={`CatView__model ${camera}`} path={`${process.env.PUBLIC_URL}/images/render/catrender.svg`}>
                <SvgProxy selector={eyesFillSelector} fill={catEyesProps.fill} />
                <SvgProxy selector={furOnlyStrokeSelector} fill={catFurProps.stroke} />
                <SvgProxy selector={furFillAndStrokeSelector} fill={catFurProps.fill} stroke={catFurProps.stroke} />
                <SvgProxy selector={linesPatternSelector} fill={catFurProps.stroke} display={catFurProps.type === "lines" ? "visible" : "none"} />
                <SvgProxy selector={"#ear-left-linePattern, #ear-right-linePattern"} stroke={catFurProps.type === "lines" ? "rgba(0, 0, 0, 0.1)" : catFurProps.stroke} />
                <SvgProxy selector={colorAndWhitePatternSelector} display={catFurProps.type === "colorAndWhite" ? "visible" : "none"} fill={catFurProps.fill==="#ffffff" ? "lightGray" : "#FFFFFF"} />
                <SvgProxy selector={siamesePatternSelector} fill={"#4B3636"} display={catFurProps.type === "siamese" ? "visible" : "none"} stroke={catFurProps.stroke} />
                <SvgProxy selector={furOnlyStrokeSelector} fill={catFurProps.type === "siamese" ? "#000000" : catFurProps.stroke} />
                <SvgProxy selector={"#nose, #ear-left-inside, #ear-right-inside"} fill={catFurProps.type === "siamese" ? "#000000" : "#FFC3F9"}/>
                <SvgProxy selector={shadowSelector} fill-opacity={catFurProps.type === "siamese" ? "0.25" : "0.1"} />
                <SvgProxy selector={tricolorYellowSelector + ", " + tricolorBlackSelector} display={catFurProps.type === "tricolor" ? "visible" : "none"} />
                <SvgProxy selector={tricolorBlackSelector} fill={catFurProps.fill === "#000000" ? "#E9B388" : "#000000"} />
                <SvgProxy selector={tricolorYellowSelector} fill={catFurProps.fill === "#000000" ? "#FFFFFF" : "#E9B388"} />
                <SvgProxy selector={"#ear-left-inside, #ear-right-inside"} fill={catFurProps.type === "tricolor" ? "darkGray" : "#FFC3F9"}/>
                <SvgProxy selector={pupilContractedSelector} display={catEyesProps.type === "contracted" ? "visible" : "none"}/>
                <SvgProxy selector={pupilNormalSelector} display={catEyesProps.type === "normal" ? "visible" : "none"}/>
                <SvgProxy selector={pupilExpandedSelector} display={catEyesProps.type === "expanded" ? "visible" : "none"}/>
            </SvgLoader>
        </article>
    )
}