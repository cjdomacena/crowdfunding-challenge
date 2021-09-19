import React from 'react'
import { FundContainer } from './FundContainerStyle'
import FundText from '../FundText/FundText'
const index = () => {
	return (
		<FundContainer>
			<FundText  fundHeader={"$100,000"} fundFooter={"of $200,000 backed"}/>
			<FundText  fundHeader={"5,007"} fundFooter={"total backers"}/>
			<FundText fundHeader={"56"} fundFooter={"days left"}/>
		</FundContainer>
	)
}

export default index
