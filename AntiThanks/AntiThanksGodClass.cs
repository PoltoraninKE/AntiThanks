using System.Text.Json;

namespace AntiThanks;

public class AntiThanksGodClass
{
    private List<User>? _items;

    public AntiThanksGodClass()
    {
        LoadJson();
    }

    private void LoadJson()
    {
        using var reader = new StreamReader(@"antithanksBD");
        var json = reader.ReadToEnd();
        _items = JsonSerializer.Deserialize<List<User>>(json);`
    }

    public void ChangeAntiThanks(int userId, int count)
    {
        _items.FirstOrDefault(e => e.Id == userId)!.Count += count;
    }
}