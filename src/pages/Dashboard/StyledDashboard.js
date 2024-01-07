import { styled } from 'styled-components';

const StyledDashboard = styled.section`
    width: 100%;   
    
    header{
        margin: 3rem auto;

        height: 72px;

        display: flex;

        justify-content: center;
        align-items: center;
       
    }  

    .dashboard-container{
        width: 90%;
        max-width: 800px;

        margin: 0 auto;

        justify-content: center;
        
        .header__content{
        width: 100%;
        
        display: flex;

        justify-content: space-between;        
        }
    }
    
    .dashboard__section-top{
        width: 100%;

        border-top: 1px solid var(--color-gray-300);
        border-bottom: 1px solid var(--color-gray-300);
    }


    h1{
        font-size: 18px;
        font-weight: 700;
    }

    span{
        font-size: 12px;
        font-weight: 600;

        color: var(--color-gray-100);
    }

    p{
        font-size: 1rem;
        font-weight: normal;

        color: var(--color-gray-0);
    }
`

export default StyledDashboard