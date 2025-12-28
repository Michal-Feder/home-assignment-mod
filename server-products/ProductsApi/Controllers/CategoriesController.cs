using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("categories")]
public class CategoriesController : ControllerBase
{
    private readonly AppDbContext _db;

    public CategoriesController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IActionResult> GetCategories()
    {
        return Ok(await _db.Categories.ToListAsync());
    }

    [HttpGet("{id}/products")]
    public async Task<IActionResult> GetProducts(int id)
    {
        var products = await _db.Products
            .Where(p => p.CategoryId == id)
            .ToListAsync();

        return Ok(products);
    }
}
