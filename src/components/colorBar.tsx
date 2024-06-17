interface ColorBarProps {
    color: string;
    width: string;
}

const ColorBar: React.FC<ColorBarProps> = ( {width, color} ) => {
    return ( 
        <div 
            className=" h-4 bg-white rounded-full mr-2"
            style={{width: width, backgroundColor: color}}
        >

        </div>
     );
}
 
export default ColorBar;