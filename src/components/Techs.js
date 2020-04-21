import React from 'react';

export default function Techs({techs}) {
  return (
    techs.map(tech => {
      <Text style={styles.tech}>tech</Text>
    })
  )
}