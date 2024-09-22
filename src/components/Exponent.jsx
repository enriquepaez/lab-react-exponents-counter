function Exponent({ count, exponent }) {

  const repeatedCount = Array(exponent).fill(count).join(' * ');
  const result = Math.pow(count, exponent)

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>{exponent}</sup></p>
      <p className="exponent-result">{repeatedCount} = <span className="total">{result}</span></p>
    </div>
  )
}

export default Exponent