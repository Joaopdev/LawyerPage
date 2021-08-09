import React from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'


export const Background = styled.div`
    background-color: white;
    height: auto;
    width: 100%;
`
export const Title = styled.h1`
    color: #B89B5F;
    font-size: 1.2rem;
    background-color: #223555;
    height: 100%;
    display: flex; 
    justify-content: center;
    text-align: center;
    align-items: center;
       
`

export const Barra = styled.div`
    width: 100%;
    background-color: #223555;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-around;
    margin: 0;

`

const Mural = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
    width: 100%;

    aside {
        
        width: 44.6%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        


        

        span {
        
        width: auto; height: 20vh;
        margin-right: 70px;
        position: relative;
        top: -3rem;
        
        }

        h2 {
            font-size: 8rem;
            color: #323232;
            width: 15vw;
            text-align: center;
            padding: 0;
            height: auto;
            
        }

        p {
            font-family: 'STIX Two Text', serif; 
            font-weight: 500;
            font-size: 1.3rem;
            background-color: white;
            color: #868272;
            width: 15vw; height: 3rem;
            position: relative;
            top: -60px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            
            
            
        }
        

        
    }

`

const Span = styled.span`

    width: 54.2%;
    height: calc(100vh - 80px);
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 0px;

    article { 
        width: 30vw; 
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #718195;

        h2 {
            margin-top: -1.5rem;
            font-size: 2rem;
            font-weight: 900;
            color: #253447;
            font-family: 'STIX Two Text', serif; 

        }
        h3 {
            font-size: 1rem;
            margin-top: 1rem;
            font-family: 'STIX Two Text', serif; 


            &::after {
                content: '';
                height: 3px;
                background-color: #718195;
                width: 50px;
                margin: 22px 0 22px 0;
                display: block;
                border-radius: 5px;

                
            }
        }
        p {
            font-size: .9rem;
            margin-bottom: 2rem;
            color: inherit;
            font-family: 'STIX Two Text', serif; 

        }

        h4 {
            font-family: 'WindSong', cursive;
            font-size: 1.5rem;
        }


    }
`


export default function About(props) {
    return (
        <Background>
            
                
                <Barra>
                    <Title>Denzel & Michael </Title>
                    <Menu />
                </Barra>
            
            <Mural>    
                <aside >
                    
                        <span>
                            <h2>18</h2>
                            <p>Years Of Experience</p>
                        </span>
                        <span>
                            <h2>30</h2>
                            <p>Professional attorneys</p>
                        </span>
                        <span>
                            <h2>50</h2>
                            <p>New Cases Every Year</p>
                        </span>
                    
                </aside>
                <Span >
                    <article>
                        <h2>A Reputation for Excellence</h2>
                        <h3>My goal is to protect your rights and best interests. If that means taking a case through trial, I am ready.</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sed facere quis suscipit doloremque error magni mollitia quasi amet corrupti, repellendus cumque, fugit nesciunt consequuntur aut sit necessitatibus eius ipsa!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illum ipsam cum at! Alias ipsum natus quo cumque voluptatem. Quisquam quos obcaecati exercitationem magni enim repellat dignissimos sequi aperiam adipisci!
                        </p>
                        <h4>Denzel Goldman</h4>
                    </article>
                </Span>
            </Mural>

        </Background>
    )
}