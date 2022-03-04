import React from 'react';

export const RowStyle: React.CSSProperties= {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
}

export const HeaderStyle:React.CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'ActiveBorder',
    boxShadow: "1px 1px 5px 1px rgba(255,255,255,0.2)",
    position: 'fixed',
    zIndex: 1,
    width: '100%'
}

export const ContentStyle: React.CSSProperties = {
    padding: '0 25px',
    marginTop: 70,
    marginBottom: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
}

export const ButtonStyle: React.CSSProperties = {
    color: 'ActiveBorder',
    borderColor: 'ActiveBorder',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    fontFamily: 'monospace'
}