import styled from 'styled-components';
import ReactSlider from 'react-slider'

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => (props.index === 2 ? '#ddd' : props.index === 1 ? '#6029a1' : '#ddd')};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const StyledContainer = styled.div`
    overflow: auto;
    width: 75%;
    max-width: 100%;
    padding-right: 8px;
    margin-left: 10px;
`;

function AgeSlider({onChange}){
    return (
        <StyledContainer>
            <StyledSlider defaultValue={[18, 80]} renderTrack={Track} renderThumb={Thumb} min={18} max={80} onChange={onChange} />
        </StyledContainer>
    );
}

export default AgeSlider