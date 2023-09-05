function CopyrightFooter(){
    return(
        <div style={{
            'backgroundColor': '#f3f3f3',
            'display': 'flex',
            'padding': '20px 0',
            'borderTop': '1px solid #a5a5a5',
            'transform': 'translateY(-1px)'
        }}>
            <p style={{
                'margin': '0 auto',
                'color': '#a7aaa8'
            }}>© {new Date().getFullYear()} The It Factor, LLC. </p>
        </div>
    )
}

export default CopyrightFooter;