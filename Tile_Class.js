class C_Tile
    {
        constructor(l_x,l_y,l_value)
        {
            this.Tile_xpos=l_x;
            this.Tile_ypos=l_y;
            this.Tile_size=100;
            this.Tile_value=l_value;
            this.Tile_color="#f4ec90";
        }
        m_Draw(l_context)
        {
            l_context.fillStyle=this.Tile_color;
            l_context.lineWidth=3;
            l_context.fillRect(this.Tile_xpos, this.Tile_ypos, this.Tile_size, this.Tile_size);
            l_context.strokeStyle="#000000";
            l_context.strokeRect(this.Tile_xpos, this.Tile_ypos, this.Tile_size, this.Tile_size);
            l_context.fillStyle="#000000";
            l_context.font="30px Arial";
            l_context.fillText(this.Tile_value, this.Tile_xpos+40, this.Tile_ypos+60);
        }
        
    }