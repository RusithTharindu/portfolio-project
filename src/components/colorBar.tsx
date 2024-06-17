interface ColorBarProps {
    color: string;
    width: string;
}

const ColorBar: React.FC<ColorBarProps> = ( {width, color} ) => {
    return ( 
        <div 
            className=" h-5 bg-white rounded-full"
            style={{width: width, backgroundColor: color}}
        >

        </div>
     );
}
 
export default ColorBar;