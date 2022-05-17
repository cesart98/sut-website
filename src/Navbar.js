import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function NavbarComponent() {
  return (
    <Navbar>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav fill className="me-auto">
              <NavDropdown title="Become a Member" id="nav-dropdown">
                <NavDropdown.Item>Benefits of Student Membership</NavDropdown.Item>
                <NavDropdown.Item>Benefits of Individual Membership</NavDropdown.Item>
                <NavDropdown.Item>Benefits of Corporate Membership</NavDropdown.Item>
                <NavDropdown.Item>Membership Regulations</NavDropdown.Item>
                <NavDropdown.Item>Membership Registration</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us" id="nav-dropdown">
                <NavDropdown.Item>Elected Officers</NavDropdown.Item>
                <NavDropdown.Item>Staff</NavDropdown.Item>
                <NavDropdown.Item>SUT UK</NavDropdown.Item>
                <NavDropdown.Item>Statement on Discrimination and Sexual Harrasment</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Committees" id="nav-dropdown">
                <NavDropdown.Item>SUT Houston Branch Executive Committee</NavDropdown.Item>
                <NavDropdown.Item>Offshore Site Investigation and Geotechnics</NavDropdown.Item>
                <NavDropdown.Item>Subsea Engineering and Operations</NavDropdown.Item>
                <NavDropdown.Item>Group on Environmental Forces</NavDropdown.Item>
                <NavDropdown.Item>Robotics & Automation</NavDropdown.Item>
                <NavDropdown.Item>Marine Renewable Energy Committee</NavDropdown.Item>
                <NavDropdown.Item>Education Committee</NavDropdown.Item>
                <NavDropdown.Item>SUT Young Professionals</NavDropdown.Item>
                <NavDropdown.Item>Advisory Committee</NavDropdown.Item>
                <NavDropdown.Item>School Touring Committee</NavDropdown.Item>
                <NavDropdown.Item>Women In Industry</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Student Chapters" id="nav-dropdown">
                <NavDropdown.Item>Texas A&M University-College Station</NavDropdown.Item>
                <NavDropdown.Item>University of Houston</NavDropdown.Item>
                <NavDropdown.Item>Texas A&M University at Galveston</NavDropdown.Item>
                <NavDropdown.Item>Rice University</NavDropdown.Item>
                <NavDropdown.Item>Prairie View A&M University</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Mentoring Program" id="nav-dropdown">
              <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.Item>Mentoring Program Guidelines</NavDropdown.Item>
                <NavDropdown.Item>Mentoring Program FAQs</NavDropdown.Item>
                <NavDropdown.Item>Our Mentors</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Learning Programs" id="nav-dropdown">
                <NavDropdown.Item>Undergraduate and Graduate Scholarships</NavDropdown.Item>
                <NavDropdown.Item>Subsea Awareness Course</NavDropdown.Item>
                <NavDropdown.Item>Introduction to Marine Site Characterization Course</NavDropdown.Item>
                <NavDropdown.Item>Marine Archaeology Course</NavDropdown.Item>
                <NavDropdown.Item>School Touring</NavDropdown.Item>
                <NavDropdown.Item>NAS-UGOS Initiative</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Events" id="nav-dropdown">
                <NavDropdown.Item>SUT US General Calendar</NavDropdown.Item>
                <NavDropdown.Item>Sponsorships</NavDropdown.Item>
                <NavDropdown.Item>SUT Templates</NavDropdown.Item>
                <NavDropdown.Item>Upcoming Events</NavDropdown.Item>
              </NavDropdown>
            </Nav>
    </Navbar>
  );
}

export default NavbarComponent;