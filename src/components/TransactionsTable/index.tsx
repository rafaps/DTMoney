import {Container } from './styles'


export function TransactionTable(){
    return (
        
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>


                </thead>

                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className="income">AUD $1000</td>
                        <td>Development</td>
                        <td>08/06/2021</td>
                    </tr>

                    <tr>
                        <td>Website development</td>
                        <td className="outcome">AUD $1000</td>
                        <td>Development</td>
                        <td>08/06/2021</td>
                    </tr>

                    <tr>
                        <td>Website development</td>
                        <td className="income">AUD $1000</td>
                        <td>Development</td>
                        <td>08/06/2021</td>
                    </tr>


                </tbody>


            </table>


        </Container>


    )


}