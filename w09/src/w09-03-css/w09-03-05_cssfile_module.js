import styles from './w09-03-05_cssfile.module.css'; 

const Car = () => {
  
  return (
    <>
      <p>css 모듈파일을 생성했을 때: </p>
      <h1 className={styles.bigblue}>Hello Car!</h1>
    </>
  );
}

export default Car;