import { Box, Stack, Text, IconButton, Icon, Link, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
   
    <Box ml={30}>
    <Image src="https://i.postimg.cc/5t96DYBj/auto.png"/>
      <Stack spacing={130} direction={["column", "column", "row", "row"]} px={8} mx="auto" maxW="7xl" mt={10}>
        <Stack color="white" spacing={4} align="flex-start">
          <Text  textDecoration="none" borderBottom="2px solid yellow" fontWeight="bold" fontSize="md" mb={2}>CUSTOMER SUPPORT</Text>
          <Link  href="#">Accessibility Statement</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Forgot Password</Link>
          <Link href="#">Help Desk</Link>
          <Link href="#">In Store Pickup</Link>
          <Link href="#">In Store Services</Link>
          <Link href="#">Order Tracking</Link>
          <Link href="#">Recall Information</Link>
          <Link href="#">Return Policy</Link>
          <Link href="#">Same Day Delivery</Link>
          <Link href="#">UBER Driver Rewards</Link>
        </Stack>
        <Stack color="white" spacing={4} align="flex-start">
          <Text textDecoration="none" borderBottom="2px solid yellow"  fontWeight="bold" fontSize="md" mb={2}>ABOUT US</Text>
          <Link href="#">Affiliate Program</Link>
          <Link href="#">Career Opportunities</Link>
          <Link href="#">Corporate Information</Link>
          <Link href="#">Gift Cards</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">2020 Annual Report</Link>
          <Link href="#">Annual Meeting Materials</Link>
          <Link href="#">Safety Data Sheets (SDS)</Link>
          <Link href="#">Press</Link>
          <Link href="#">Store Locator</Link>
        </Stack>
        <Stack  color="white" spacing={4} align="flex-start">
          <Text textDecoration="none" borderBottom="2px solid yellow" fontWeight="bold" fontSize="md" mb={2}>PROFESSIONAL SHOPS</Text>
          <Link href="#">MyAdvance</Link>
          <Link href="#">Online Parts Ordering</Link>
          <Link href="#">TechNet Professional</Link>
          <Link href="#">Technical Training</Link>
          <Link href="#">Interactive Vehicle Animations</Link>
          <Link href="#">Parts & Products</Link>
          <Link href="#">Promotions & Rewards</Link>
          <Link href="#">Shop Solutions</Link>
          <Link href="#">Find My Mechanic</Link>
        </Stack>
        <Stack  spacing={5} align="center">
          <Text borderBottom="2px solid yellow" color="white" fontWeight="bold" fontSize="lg" mb={2}>FOLLOW US</Text>
          <Stack textDecoration="none" color="black" direction="column" spacing={2}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="md" variant="ghost" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="md" variant="ghost" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="md" variant="ghost" />
            <IconButton aria-label="Pinterest" icon={<FaPinterest />} size="md" variant="ghost" />
            <IconButton aria-label="Youtube" icon={<FaYoutube />} size="md" variant="ghost" />
          </Stack>
          <Image src="https://i.postimg.cc/43ycxZxH/AutoMads.png" alt="Logo" maxW="150px" mt={4} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
