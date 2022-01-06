import React from "react";
import { Link } from "react-router-dom";

export default ({ id, _src }: { id: number; _src: string }) => (
    <div>
        <Link to={`/${id}`}>
            <img src={_src} />
        </Link>
    </div>
);
