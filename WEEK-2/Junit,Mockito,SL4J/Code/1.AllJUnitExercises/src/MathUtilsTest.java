import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class MathUtilsTest {
    private MathUtils math;

    @Before
    public void setUp() {
        math = new MathUtils();
    }

    @After
    public void tearDown() {
        math = null;
    }

    @Test
    public void testMultiply() {
        int result = math.multiply(4, 5);
        assertEquals(20, result);
    }
}